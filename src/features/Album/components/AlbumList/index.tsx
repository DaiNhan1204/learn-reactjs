import './styles.scss'
import { Album } from "../Album"
type AlbumListProps = {
    albumList: {
        id: number,
        name: string,
        thumbnailUrl: string,
    }[]
}
export const AlbumList = (props: AlbumListProps) => {
    return (
        <ul className="album-list">
            {props.albumList.map(album => (
                <li key={album.id}>
                    <Album album={album.name} thumbnailUrl={album.thumbnailUrl} />
                </li>
            ))}
        </ul>
    )
}