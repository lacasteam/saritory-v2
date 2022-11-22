import BasicCard from '../../components/card-components/BasicCard.component'
import card1 from '../../images/kasanggayahan.jpg'
import card2 from '../../images/pili.jpg'
import card3 from '../../images/semanasanta.jpg'


function TestPage() {
  return (
    <div className="TestPage">

        <div className='d-flex flex-row flex-wrap justify-content-around py-4'>
          <BasicCard image={card1} title="Kasanggayahan Festival" description="The Kasanggayahan Festival, perhaps, is the largest celebration for the whole province of Sorsogon. Celebrated during the month of October every year, this festival is the commemoration of the declaration of Sorsogon as a province." />
          <BasicCard image={card2} title="Pili Festival" description="Because pili products are bountiful in Sorsogon and in the rest of the Bicol region, it is easy to understand that the people of Sorsogon have devoted a festival that features this valuable nut. The Pili Festival is held every June 28-29." />
          <BasicCard image={card3} title="Holy Week Celebration" description="In addition to Christmas and the New Year, the commemoration of the Passion of Jesus Christ is also one of the most anticipated celebrations in the country. Although Christianity was brought to the Philippines by the Spanish colonizers." />
          <BasicCard image={card1} title="Kasanggayahan Festival" description="The Kasanggayahan Festival, perhaps, is the largest celebration for the whole province of Sorsogon. Celebrated during the month of October every year, this festival is the commemoration of the declaration of Sorsogon as a province." />
        </div>
    </div>
  );
}




export default TestPage;
