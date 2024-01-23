
const Imgs = ({url,alt,width, id}) => {
  return (
    <img src={url} alt={alt} width={width} className={id}/>

  )
}

export default Imgs