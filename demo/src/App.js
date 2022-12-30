import modules from './App.module.css'

var data = [
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-01.jpg',
    headline: 'Development',
    dscrb: 'Getting tickets to the big show'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg',
    headline: 'Management',
    dscrb: 'A big ticket gone to be an interesting'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg',
    headline: 'Design',
    dscrb: 'The Home of the Future Could Bebes'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-01.jpg',
    headline: 'Development',
    dscrb: 'Getting tickets to the big show'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg',
    headline: 'Management',
    dscrb: 'A big ticket gone to be an interesting'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg',
    headline: 'Design',
    dscrb: 'The Home of the Future Could Bebes'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-01.jpg',
    headline: 'Development',
    dscrb: 'Getting tickets to the big show'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg',
    headline: 'Management',
    dscrb: 'A big ticket gone to be an interesting'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg',
    headline: 'Design',
    dscrb: 'The Home of the Future Could Bebes'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-01.jpg',
    headline: 'Development',
    dscrb: 'Getting tickets to the big show'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg',
    headline: 'Management',
    dscrb: 'A big ticket gone to be an interesting'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg',
    headline: 'Design',
    dscrb: 'The Home of the Future Could Bebes'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-01.jpg',
    headline: 'Development',
    dscrb: 'Getting tickets to the big show'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg',
    headline: 'Management',
    dscrb: 'A big ticket gone to be an interesting'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg',
    headline: 'Design',
    dscrb: 'The Home of the Future Could Bebes'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-01.jpg',
    headline: 'Development',
    dscrb: 'Getting tickets to the big show'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg',
    headline: 'Management',
    dscrb: 'A big ticket gone to be an interesting'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg',
    headline: 'Design',
    dscrb: 'The Home of the Future Could Bebes'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg',
    headline: 'Management',
    dscrb: 'A big ticket gone to be an interesting'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg',
    headline: 'Design',
    dscrb: 'The Home of the Future Could Bebes'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg',
    headline: 'Management',
    dscrb: 'A big ticket gone to be an interesting'
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      'http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg',
    headline: 'Design',
    dscrb: 'The Home of the Future Could Bebes'
  },

]

function App () {
  return (
    <section id={modules.carts_all}>
      <div className='container'>
        <div className='row g-3'>
          {  data && data.length>0? data.slice(0,3).map(el => {
            return (
              <div key={`data_id${el.id}`} className='col-lg-4 col-md-6 col-sm-12'>
                <div className={modules.carts}>
                  <div className={modules.img}>
                    <img src={el.imgSrc} />
                    <div className={modules.box}>
                      <div className={modules.box_hover}>
                        <div className={modules.box_hover_item}>
                          <span>{el.headline}</span>
                          <h3>{el.dscrb}</h3>
                          <a href='#'>READ MORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        :<img className={modules.img_preloader} src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif" />
        }
        </div>
      </div>
    </section>
  )
}

export default App
