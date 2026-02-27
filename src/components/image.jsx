function Imagecard(props) {
  return (
    <div className="bg-red-600 w-500px h-500px p-5 text-center rounded">
      <img className="w-80 h-56 shadow-md shadow-black hover:translate-y-2" src={props.img} alt="photo" />
      <h1 className="m-3 text-blue-950 text-2xl">{props.disc}</h1>
    </div>
  )
}

export default Imagecard