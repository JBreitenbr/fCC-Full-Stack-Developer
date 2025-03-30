/*********************************************************
 *  getBookmarks
 *********************************************************/
function getBookmarks() {
    try {
        const storedBookmarks = localStorage.getItem("bookmarks");
        const bookmarks = storedBookmarks ? JSON.parse(storedBookmarks) : [];

        if (Array.isArray(bookmarks) && bookmarks.every(b => b.name && b.category && b.url)) {
            return bookmarks;
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error retrieving bookmarks from localStorage:", error);
        return [];
    }
}

/*********************************************************
 *  displayOrCloseForm: Toggles #main-section & #form-section
 *********************************************************/
function displayOrCloseForm() {
    const mainSection = document.getElementById("main-section");
    const formSection = document.getElementById("form-section");
    mainSection.classList.toggle("hidden");
    formSection.classList.toggle("hidden");
}

/*********************************************************
 *  displayOrHideCategory: Toggles #main-section & #bookmark-list-section
 *********************************************************/
function displayOrHideCategory() {
    const mainSection = document.getElementById("main-section");
    const bookmarkListSection = document.getElementById("bookmark-list-section");
    mainSection.classList.toggle("hidden");
    bookmarkListSection.classList.toggle("hidden");
}

/*********************************************************
 *  DOM Elements
 *********************************************************/
const addBookmarkBtn       = document.getElementById("add-bookmark-button");
const closeFormBtn         = document.getElementById("close-form-button");
const addBookmarkFormBtn   = document.getElementById("add-bookmark-button-form");
const nameInput            = document.getElementById("name");
const urlInput             = document.getElementById("url");
const categoryDropdown     = document.getElementById("category-dropdown");

// Two different headings with same class, but in different sections:
const formCategoryHeading  = document.querySelector("#form-section .category-name");
const listCategoryHeading  = document.querySelector("#bookmark-list-section .category-name");

const viewCategoryBtn      = document.getElementById("view-category-button");
const categoryList         = document.getElementById("category-list");
const closeListBtn         = document.getElementById("close-list-button");
const deleteBookmarkBtn    = document.getElementById("delete-bookmark-button");

/*********************************************************
 *  #add-bookmark-button (Requirements 8–9)
 *    - Update the form heading
 *    - displayOrCloseForm
 *********************************************************/
addBookmarkBtn.addEventListener("click", () => {
    formCategoryHeading.innerText = categoryDropdown.value;
    displayOrCloseForm();
});

/*********************************************************
 *  #close-form-button (Requirement 10)
 *********************************************************/
closeFormBtn.addEventListener("click", () => {
    displayOrCloseForm();
});

/*********************************************************
 *  #add-bookmark-button-form (Requirements 11–13)
 *********************************************************/
addBookmarkFormBtn.addEventListener("click", () => {
    const bookmarks = getBookmarks();

    const newBookmark = {
        name: nameInput.value.trim(),
        category: categoryDropdown.value.trim(),
        url: urlInput.value.trim()
    };

    bookmarks.push(newBookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    // Reset inputs
    nameInput.value = "";
    urlInput.value = "";

    // Toggle form off, main on
    displayOrCloseForm();
});

/*********************************************************
 *  #view-category-button (Requirements 16–20)
 *********************************************************/
viewCategoryBtn.addEventListener("click", () => {
    // 1. Get the text displayed in the <option> (e.g., "News")
    const chosenCategoryText = categoryDropdown.options[categoryDropdown.selectedIndex].text;
    
    // 2. Update the heading in the bookmark list section
    listCategoryHeading.innerText = chosenCategoryText;

    // 3. Clear previous content in #category-list - IMPORTANT: do this first
    categoryList.innerHTML = "";

    // 4. Retrieve bookmarks and filter by the option's value (e.g., "news")
    const bookmarks = getBookmarks();
    const chosenCategoryValue = categoryDropdown.value;
    const filtered = bookmarks.filter(b => b.category === chosenCategoryValue);

    // 5. Check if there are bookmarks for this category
    if (filtered.length === 0) {
        categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
    } else {
        // 6. Create the HTML for each bookmark
        filtered.forEach(bookmark => {
            categoryList.innerHTML += `
                <label for="${bookmark.name}">
                    <input
                        type="radio"
                        name="bookmark"
                        id="${bookmark.name}"
                        value="${bookmark.name}"
                    >
                    <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
                </label>
            `;
        });
    }

    // 7. Toggle main section and bookmark list section
    displayOrHideCategory();
});

/*********************************************************
 *  #close-list-button (Requirements 21–22)
 *********************************************************/
closeListBtn.addEventListener("click", () => {
    // Clear the category list when closing to avoid duplicates when reopening
    categoryList.innerHTML = "";
    displayOrHideCategory();
});

/*********************************************************
 *  #delete-bookmark-button (Requirement 23)
 *********************************************************/
deleteBookmarkBtn.addEventListener("click", () => {
    const selectedRadio = document.querySelector('input[name="bookmark"]:checked');
    if (!selectedRadio) {
        alert("Please select a bookmark to delete.");
        return;
    }

    const bookmarkName = selectedRadio.value;
    const chosenCategory = categoryDropdown.value;
    const bookmarks = getBookmarks();

    // Filter out the bookmark to delete
    const updatedBookmarks = bookmarks.filter(
        bookmark => !(bookmark.name === bookmarkName && bookmark.category === chosenCategory)
    );

    // Save updated bookmarks to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

    // Clear the category list FIRST before adding anything new
    categoryList.innerHTML = "";

    // Filter for the current category view
    const filtered = updatedBookmarks.filter(b => b.category === chosenCategory);

    // Update the display
    if (filtered.length === 0) {
        categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
    } else {
        filtered.forEach(bookmark => {
            categoryList.innerHTML += `
                <label for="${bookmark.name}">
                    <input
                        type="radio"
                        name="bookmark"
                        id="${bookmark.name}"
                        value="${bookmark.name}"
                    >
                    <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
                </label>
            `;
        });
    }
});
