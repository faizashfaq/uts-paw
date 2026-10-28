import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Kuliah', tenggat: '', prioritas: 'sedang' }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form id="formulir" className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Film/Serial</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Sci-Fi</option>
        <option>Horror</option>
        <option>Action</option>
        <option>Comedy</option>
        <option>Romance</option>
      </select>

      <label htmlFor="sutradara">Sutradara</label>
      <input id="sutradara" name="sutradara" value={form.sutradara} onChange={ubah} />

      <label htmlFor="tahunRilis">Tahun Rilis</label>
      <input id="tahunRilis" name="tahunRilis" value={form.tahunRilis} onChange={ubah} />

      <label htmlFor="rating">Rating</label>
      <input id="rating" name="rating" value={form.rating} onChange={ubah} />

      <button type="submit">Simpan</button>
    </form>
  )
}