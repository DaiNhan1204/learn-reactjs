import React from "react"
import { AlbumList } from "./components/AlbumList"
const AlbumFeature = () => {
    const A = [
        {
            id: 1,
            name: 'Thả mình cùng những giai điệu',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/c/5/c/ec5c1754c2dcb12098701fc050678bb2.jpg'
        },
        {
            id: 2,
            name: 'Đắm say với nỗi buồn',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/4/9/45493e859cde749c75fb4377c14d0db3.jpg'
        },
        {
            id: 3,
            name: 'Giai điệu nhạc Hoa lời Việt',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/c/9/f/cc9f7d0078204d00a5c27345ce3c9546.jpg'
        }
    ]
    return (
        <div>
            <h2>Có thể bạn thích đấy</h2>
            <AlbumList albumList={A} />
        </div>
    )
}
export default AlbumFeature;