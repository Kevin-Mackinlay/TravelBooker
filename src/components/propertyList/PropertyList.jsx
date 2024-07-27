import './propertyList.css'

const propertyList = () => {
  return (
    <div className="pList">
      <div className="plistItem">
        <img src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>345 hotels</h2>
        </div>
      </div>
      <div className="plistItem">
        <img src="https://images.pexels.com/photos/681331/pexels-photo-681331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>134 apartments</h2>
        </div>
      </div>
      <div className="plistItem">
        <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>345 resorts</h2>
        </div>
      </div>
      <div className="plistItem">
        <img src="https://images.pexels.com/photos/3051551/pexels-photo-3051551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>234 villas</h2>
        </div>
      </div>
      <div className="plistItem">
        <img src="https://images.pexels.com/photos/754268/pexels-photo-754268.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>199 cabins</h2>
        </div>
      </div>
    </div>
  );
}

export default propertyList