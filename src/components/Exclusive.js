import React from 'react'
import originalLogo from "./../original-logo-jesus-mallo.jpg"
import princeLogo from "./../prince-love-symbol.png"

export default function Exclusive() {
    return (
        <div>
            <h1>Exclusive Content</h1>

            <p className="bioDataSmall">
            <h2>The origin of Jesus Mallo eight pointed star logo<img src="./../jesus-mallo-logo.png" alt=""/></h2>
            <h3>The eight pointed star logo representing Jesus Mallo as a musician, similarly as Prince did with his love symbol logo<img src={princeLogo} alt="princeLogo"/>
            was taken from a paint made by Jesus Mallo itself. <br/>Here you have the original paint:</h3>
              </p>
              <img src={originalLogo} alt="JesusMalloHomeLogo" className="OriginalJesusMalloLogo"/>
              
<br/>
<hr/>
<p className="bioDataSmall">
            <h2>Unreleased Music</h2>
            <h3>Jesus Mallo has composed and recorded more than 100 songs. Some has been lost forever due to loss of data after various
            computer crashes since 2002. However he keeps in his 'vault' (in Google Drive, and an external HDD) a lot of unreleased songs, or rarities like "I KNOW", recorded in his
            home studio, playing acoustic guitar and singing. The last verse in the song, "This isn´t the last song" is taken from Björk´s 'Dancing in the darkness' film
            OST, a film where she is also the main character. Jesus Mallo dedicated "I Know" song, recorded in 2015, to his best friend and to his physician, during stressful moments filled with uncertainty in personal issues
            </h3>
            <iframe width="300" height="170" src="https://www.youtube.com/embed/flVJnVpuc94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            </p>
            
        </div>
    )
}
