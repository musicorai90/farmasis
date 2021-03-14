import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom"

import Header from "./../Header/Header.js"
import Footer from "./../Footer/Footer.js"
import Sidebar from "./../Sidebar/Sidebar.js"
import Product from "./../Product/Product.js"

import PhotoBelleza from "./img/photo1.jpg"
import PhotoLimpieza from "./img/photo2.jpg"
import PhotoMedicamento from "./img/photo3.jpg"

import styles from "./Styles.module.css"

function Home() {
  const clases = styles
  const photoBelleza = PhotoBelleza
  const photoLimpieza = PhotoLimpieza
  const photoMedicamento = PhotoMedicamento
  const match = useRouteMatch()
  const [data, setData] = useState(false)

  return (
    <div className={clases.container}>
      <Header />
      <main className={clases.main}>
        <Sidebar />
        <div className={clases.productsContainer}>
          <Router>
            <Switch>
              <Route path={`${match.path}/belleza`}>
                <Product photo={ photoBelleza } />
                <Product photo={ photoBelleza } />
                <Product photo={ photoBelleza } />
                <Product photo={ photoBelleza } />
                <Product photo={ photoBelleza } />
                <Product photo={ photoBelleza } />
              </Route>
              <Route path={`${match.path}/limpieza`}>
                <Product photo={ photoLimpieza } />
                <Product photo={ photoLimpieza } />
                <Product photo={ photoLimpieza } />
                <Product photo={ photoLimpieza } />
                <Product photo={ photoLimpieza } />
                <Product photo={ photoLimpieza } />
              </Route>
              <Route path={`${match.path}/medicamentos`}>
                <Product photo={ photoMedicamento } />
                <Product photo={ photoMedicamento } />
                <Product photo={ photoMedicamento } />
                <Product photo={ photoMedicamento } />
                <Product photo={ photoMedicamento } />
                <Product photo={ photoMedicamento } />
              </Route>
            </Switch>
          </Router>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home;
