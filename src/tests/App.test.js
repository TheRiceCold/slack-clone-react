import {render} from '@testing-library/react'
import {login} from './utils/api'
import App from './App'

const mockFetch = data => 
  jest.fn(() => Promise.resolve({ json: () => data }))

describe('API testing', () => {
  test('should logged mockUser', async() => {
    // login()
  })
  test('renders learn react link', () => { })
  test('renders learn react link', () => { })
  test('renders learn react link', () => { })
  test('renders learn react link', () => { })
})
