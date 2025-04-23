import React from 'react'

const Gallery = () => {

    let styles = {display: "flex", gap: "10px",justifyContent: "center"}

    const images = [
        "https://placehold.co/400",
        "https://placehold.co/400",
        "https://placehold.co/400"
    ];

  return (
    <section style={styles}>
        {
            images.map((src,index)=>{
                return <img key={index} src={src} alt={`imagen ${index+1}`} />
            })
        }
    </section>
  )
}

export default Gallery
