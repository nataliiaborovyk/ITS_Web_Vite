import React, { useState, useEffect } from 'react'

const UserAlbumsPhotos = () => {

    const url_users = "https://jsonplaceholder.typicode.com/users"
    const url_albums = "https://jsonplaceholder.typicode.com/albums"
    const url_photos = "https://jsonplaceholder.typicode.com/photos"

    const [users, setUsers] = useState([])
    const [albums, setAlbums] = useState([])
    const [photos, setPhotos] = useState([])

    const [userSelected, setUserSelected] = useState("")
    const [albumSelected, setAlbumSelected] = useState("")

    // carica gli users al primo render
    useEffect(
        () => {

            async function loadUsers() {
                const response = await fetch(url_users)
                const data = await response.json()
                setUsers(data)
            }
            // fetch(url_users)
            //     .then(response => response.json())
            //     .then(data => {setUsers(data)})

            loadUsers()
        }, []
    );

    // quando cambia userSelected -> carica gli albums
    useEffect(
        () => {
            if (!userSelected){return};

            async function loadAlbums(){
                const response = await fetch(url_albums + "?userId=" + userSelected)
                const data = await response.json()
                setAlbums(data)
            }
            // fetch(url_albums)
            //     .then(response => response.json())
            //     .then(data => {setAlbums(data)})

            loadAlbums()

            setAlbumSelected("");
            setPhotos([]);
        }, [userSelected]
    );

    // quando cambia albumSelected -> carica le photo
    useEffect(
        () => {
            if (!albumSelected){return};

            async function loadPhotos() {
                const response = await fetch(url_photos + "?albumId=" + albumSelected)
                const data = await response.json()
                setPhotos(data)
            }
            // fetch(url_photos)
            //     .then(response => response.json())
            //     .then(data => {setPhotos(data)})

            loadPhotos()        
        }, [albumSelected]
    )

    const cambioUtente = (event) => {
        let value = event.target.value;
        setUserSelected(value)
    }

    const cambioAlbum = (event) => {
        let value = event.target.value;
        setAlbumSelected(value)
    }

// utente seleziona option ->
// parte cambioUtente con event.target.value = ut.id ->
// setUserSelected(value) ->
// React aggiorna stato ->
// <select value={userSelected}> mostra la scelta 

 


  const styles = {
    container: {
      padding: "20px",
    },
    selectsRow: {
      display: "flex",
      gap: "20px",
      marginBottom: "20px",
    },
    photosGrid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    },
    photoCard: {
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "8px",
      maxWidth: "150px",
      textAlign: "center",
    },
    img: {
      maxWidth: "100%",
      display: "block",
      marginBottom: "8px",
    },
  };

  return (
    <div>
        <div style={styles.container}>
            {/* Select Utenti*/}
            <div> 
                <label>
                    Utente:
                    <select value={userSelected} onChange={cambioUtente}>
                        <option value=""> Seleziona utente...</option>  
                        {
                            users.map(
                                (ut) => (
                                    <option key={ut.id} value={ut.id}> 
                                        {ut.name} 
                                    </option>
                                )
                            )
                        }
                    </select>
                </label>
            </div>

            {/*Select Album*/}
            <div>
                <label>
                    Album:
                    <select 
                        value={albumSelected} 
                        onChange={cambioAlbum}
                        disabled={!userSelected || albums.length === 0}
                        >
                        <option value=""> Seleziona album...</option>
                        {
                            albums.map(
                                (alb) => (
                                    <option key={alb.id} value={alb.id}>
                                        {alb.title}
                                    </option>
                                )
                            )
                        }
                    </select>
                </label>
            </div>

            {/*Griglia Foto*/}
            <div style={styles.photosGrid}>
                {
                    photos.map(
                        (photo) => (
                            <div key={photo.id} style={styles.photosGrid} >
                                <img src={photo.thumbnailUrl} style={styles.img} />
                                {photo.title}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default UserAlbumsPhotos