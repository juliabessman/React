



import './style.css';
import React,{useState} from 'react';

function App() {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
     
  <div id='abo'>
  <h1 class='about'> About us</h1>
</div>
      <p className="opis">
      Sklep odzieżowy Nakyy. to autorski projekt, który narodził się z naszej wielkiej miłości do mody. Na początku nasz asortyment był bardzo ograniczony – zależało nam na tym, by pojawiały się w nim wyłącznie najwyższej jakości ubrania damskie, które wyróżniają się komfortem noszenia, najlepszymi materiałami i nienagannym stylem. Każdy model był starannie selekcjonowany, co doceniło stale powiększające się grono zadowolonych klientek, zarówno w Polsce, jak i za granicą. Z czasem oferta sklepu online stawała się znacznie bardziej różnorodna i rozbudowana, jednak wciąż najważniejszą zasadę stanowi dla nas dbanie o najwyższą jakość oraz zadowolenie klientek. Do fanek  Nakyy. należą m.in. takie gwiazdy jak Maffashion, Klaudia Halejcio, Ola Ciupa, Angelika Mucha czy Agnieszka Sienkiewicz. Na fali sukcesu sprzedaży odzieży damskiej online postanowiłyśmy otworzyć również stacjonarny sklep z ubraniami w Krakowie. To właśnie w tym miejscu można na własne oczy przekonać się o jakości naszego asortymentu, przymierzyć różne modele, a także poznać nas osobiście. Budowanie relacji z klientkami jest jednym z naszych priorytetów. Osoby, które nie mają możliwości odwiedzania naszego punktu stacjonarnego, zachęcamy do obserwowania naszych profili w mediach społecznościowych. To właśnie tam można zapoznać się z nowymi modelami oraz aktualnymi promocjami. Czekamy także na szczere opinie dotyczące produktów i obsługi – to właśnie dzięki nim możemy się rozwijać i jeszcze lepiej odpowiadać na Wasze potrzeby. Oczywiście szczególnie doceniamy każde dobre słowo i pozytywną informację zwrotną, ponieważ to właśnie one udowadniają nam, że nasza praca ma sens i motywują nas do podejmowania kolejnych zawodowych wyzwań!Sklep odzieżowy Nakyy. to autorski projekt, który narodził się z naszej wielkiej miłości do mody. Na początku nasz asortyment był bardzo ograniczony – zależało nam na tym, by pojawiały się w nim wyłącznie najwyższej jakości ubrania damskie, które wyróżniają się komfortem noszenia, najlepszymi materiałami i nienagannym stylem. Każdy model był starannie selekcjonowany, co doceniło stale powiększające się grono zadowolonych klientek, zarówno w Polsce, jak i za granicą. Z czasem oferta sklepu online stawała się znacznie bardziej różnorodna i rozbudowana, jednak wciąż najważniejszą zasadę stanowi dla nas dbanie o najwyższą jakość oraz zadowolenie klientek. Do fanek  Nakyy. należą m.in. takie gwiazdy jak Maffashion, Klaudia Halejcio, Ola Ciupa, Angelika Mucha czy Agnieszka Sienkiewicz. Na fali sukcesu sprzedaży odzieży damskiej online postanowiłyśmy otworzyć również stacjonarny sklep z ubraniami w Krakowie. To właśnie w tym miejscu można na własne oczy przekonać się o jakości naszego asortymentu, przymierzyć różne modele, a także poznać nas osobiście. Budowanie relacji z klientkami jest jednym z naszych priorytetów. Osoby, które nie mają możliwości odwiedzania naszego punktu stacjonarnego, zachęcamy do obserwowania naszych profili w mediach społecznościowych. To właśnie tam można zapoznać się z nowymi modelami oraz aktualnymi promocjami. Czekamy także na szczere opinie dotyczące produktów i obsługi – to właśnie dzięki nim możemy się rozwijać i jeszcze lepiej odpowiadać na Wasze potrzeby. Oczywiście szczególnie doceniamy każde dobre słowo i pozytywną informację zwrotną, ponieważ to właśnie one udowadniają nam, że nasza praca ma sens i motywują nas do podejmowania kolejnych zawodowych wyzwań!
      </p>
  </div>
  const linkName=readMore?'Read Less << ':'Read More about our company >> '
  return (
    <div className="App">
      <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      {readMore && extraContent}
    </div>
  );
}

export default App;






