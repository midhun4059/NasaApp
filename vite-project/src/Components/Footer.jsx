
const Footer = (props) => {
  const{showModal,modalFunction,data}=props
  return (
    
      <footer>
        <div className="bgGradient">
           </div>

        <div>
          <h2>{data?.title}</h2>
          <h1>APOD PROJECT</h1>
        </div>
    <button onClick={modalFunction}>
      <i className="fa-solid fa-circle-info"></i>

    </button>
      </footer>
  )
}

export default Footer
