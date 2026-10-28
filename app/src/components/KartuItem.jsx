import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, sutradara, tahunRilis, rating } = item
  return (
    <article id="kartu"className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        {kategori} | {sutradara} | {tahunRilis} | Rating IMDB: {rating}
      </p> 
    </article>
  )
}