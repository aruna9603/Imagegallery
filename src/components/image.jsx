function Imagecard(props) {
  return (
    <div className="bg-red-600 w-500px h-500px p-5 text-center rounded sm:grid-cols-1 ">
      <img className="w-80 h-56 shadow-md shadow-black hover:translate-y-2 sm:grid-cols-1" src={props.img} alt="marvel hero" />
      <h1 className="m-3 text-blue-950 text-2xl sm:grid-cols-1">{props.disc}</h1>
    </div>
  )
}

export default Imagecard