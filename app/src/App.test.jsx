import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'

// Contoh test. Tambahkan minimal 5 test buatan sendiri (butir rubrik F1).
test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('halaman beranda dapat di akses', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Ini adalah "Daftar Tontonan Film dan Serial"' })).toBeInTheDocument()
})

test('halaman tambah dapat di akses', () => {
  render(
    <MemoryRouter initialEntries={['/tambah']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Tambah Film/Serial' })).toBeInTheDocument()
})

test('halaman statistik dapat di akses', () => {
  render(
    <MemoryRouter initialEntries={['/statistik']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Statistik' })).toBeInTheDocument()
})

test('halaman tentang dapat di akses', () => {
  render(
    <MemoryRouter initialEntries={['/tentang']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Tentang' })).toBeInTheDocument()
})