export const MoodBoardItem = ({ color, image, description }) => {
  return (
      <div className="mood-board-item" style={{
            backgroundColor: color }}>
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
      </div>)
              }

export const MoodBoard = () => {
  return (
          <div className="mood-board">
            <h1 className="mood-board-heading">Destination Mood Board</h1>
            <MoodBoardItem color="#0000ff" image="https://www.dropbox.com/scl/fi/rnr9z230ftitua5fwcxju/Perugia_-_Comune_di_Perugia_-_2023-09-27_14-34-59_003.jpeg?rlkey=qp1cbdps73s8sciy4v6n150g6&st=yj7wn231&raw=1" description="Perugia" />
            <MoodBoardItem color="#e3e3e3" image="https://www.dropbox.com/scl/fi/conlzng6ai6aawe6o76p4/spello_a.jpg?rlkey=vzna6006rbrtop131c1c14wl8&st=fr7k1mxk&raw=1" description="Spello" />
            <MoodBoardItem color="papayawhip" image="https://www.dropbox.com/scl/fi/2bj9rs08oetpde8hzvc2s/Todi_panorama.jpg?rlkey=1bjh60mjdxz0ag2cabag6dgyf&st=wenib359&raw=1" description="Todi" />
            <MoodBoardItem color="darksalmon" image="https://www.dropbox.com/scl/fi/5omhrn7h9jv66khktf4ky/assisi2.png?rlkey=46nwmt4gqrplq9o61privpwkk&st=zdn2406g&raw=1" description="Assisi" />
          </div>
          )
     }

