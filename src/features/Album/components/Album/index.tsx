type AlbumProps = {
    album: string,
    thumbnailUrl: string,
}
export const Album = (props: AlbumProps) => {
    return (
        <div className="album">
            <div className="album_thumbnail">
                <img src={props.thumbnailUrl} alt={props.album} />
            </div>
            <p className="album_name">{props.album}</p>
        </div>
    )
}