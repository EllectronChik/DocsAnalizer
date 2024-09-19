import { FC, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoutesArray } from '@renderer/Routes'

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {RoutesArray.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense>
                <route.element />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
