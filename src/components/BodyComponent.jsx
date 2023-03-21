import React from 'react'
import { BoxText } from './BoxText'
import { ProductBody } from './ProductBody'
import TitleComponent from './TitleComponent'

const BodyComponent = ({ features }) => {
  
  return (
    <div>
      <div className='p-4 h-full'>
        <TitleComponent title='hola' /> 
        <BoxText  text='     Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis in labore tenetur temporibus quas laboriosam adipisci distinctio ab sit saepe repudiandae, id quod eligendi eius reiciendis ullam asperiores neque officia explicabo architecto tempore ex, consectetur laborum! Sit, voluptate aliquid quis tempora nihil itaque inventore minima asperiores sed assumenda animi adipisci facere tenetur, repellat commodi, voluptates dolores ea corrupti numquam magnam quisquam unde aspernatur perspiciatis. Labore ipsa reiciendis soluta laboriosam distinctio consectetur asperiores tenetur recusandae rerum mollitia saepe, maiores sapiente nulla? At ad quidem inventore repudiandae accusamus itaque alias error a, cupiditate quae unde expedita voluptatibus fugiat animi omnis odio harum nisi, possimus deserunt. Similique ea nostrum placeat obcaecati consequatur omnis perferendis temporibus commodi repudiandae est. Eaque neque perspiciatis excepturi ab dolorum, distinctio mollitia atque incidunt omnis explicabo nemo iusto aspernatur, sequi optio corporis deleniti earum quisquam molestiae molestias illo sed quod? Exercitationem consequatur nisi ratione. Ipsam, ut commodi laboriosam iusto ea cupiditate nam eligendi, vitae distinctio quasi odit sit? Accusamus saepe et nam unde cupiditate debitis eaque vel commodi voluptatem officiis, aperiam dolor reprehenderit itaque, soluta sed? Eveniet labore maiores deleniti at odio neque quis distinctio earum asperiores. Aut molestias sapiente consectetur reprehenderit repudiandae vero dolorem nihil quod amet magni!'/>    
        <ProductBody features={features} />
      </div>
    </div>
  )
}

export default BodyComponent
