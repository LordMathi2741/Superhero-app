import Card from './Card'

function Cards() {
  return (
    <div className='contenedor-principal'>
           <Card
       imagen='spiderman'
       name='Spiderman'
       description='Lorem ipsum dolor sit amet consectetur adipiscing elit nunc, 
       sodales non massa class ante suspendisse sagittis viverra dis, tempus in purus magna volutpat
        augue cum. Ridiculus hac sollicitudin donec nisi class eget nec mauris tortor dictum nam cras,
         iaculis etiam praesent tempor a ligula lectus habitant proin convallis. Senectus risus cum molestie 
         pharetra primis faucibus id, leo dictumst suscipit consequat dis vel varius, viverra sem sollicitudin
          potenti in massa.'/>

      <Card
          imagen='deadpool' 
          name='Deadpool' 
          description='Lorem ipsum dolor sit amet consectetur adipiscing elit nunc, 
          sodales non massa class ante suspendisse sagittis viverra dis, tempus in purus magna volutpat
           augue cum. Ridiculus hac sollicitudin donec nisi class eget nec mauris tortor dictum nam cras,
            iaculis etiam praesent tempor a ligula lectus habitant proin convallis. Senectus risus cum molestie 
            pharetra primis faucibus id, leo dictumst suscipit consequat dis vel varius, viverra sem sollicitudin
             potenti in massa.'/>
       <Card
        imagen='ironman'
        name='Iron Man'
        description='Lorem ipsum dolor sit amet consectetur adipiscing elit nunc, 
        sodales non massa class ante suspendisse sagittis viverra dis, tempus in purus magna volutpat
         augue cum. Ridiculus hac sollicitudin donec nisi class eget nec mauris tortor dictum nam cras,
          iaculis etiam praesent tempor a ligula lectus habitant proin convallis. Senectus risus cum molestie 
          pharetra primis faucibus id, leo dictumst suscipit consequat dis vel varius, viverra sem sollicitudin
           potenti in massa.'
       
       />
       <Card
          imagen='wolverine'
          name='Wolverine'
          description='Lorem ipsum dolor sit amet consectetur adipiscing elit nunc, 
          sodales non massa class ante suspendisse sagittis viverra dis, tempus in purus magna volutpat
           augue cum. Ridiculus hac sollicitudin donec nisi class eget nec mauris tortor dictum nam cras,
            iaculis etiam praesent tempor a ligula lectus habitant proin convallis. Senectus risus cum molestie 
            pharetra primis faucibus id, leo dictumst suscipit consequat dis vel varius, viverra sem sollicitudin
             potenti in massa.'
       />
    </div>
  );
}

export default Cards;
