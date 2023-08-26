export default function NoticesCategoriesList({ category }) {
    // Fetch or define data based on the category
    // let data;
    if (category === 'sell') {
    //   data = /* Data for 'sell' category */;
    } else if (category === 'lost-found') {
    //   data = /* Data for 'lost-found' category */;
    } else if (category === 'in-good-hands') {
    //   data = /* Data for 'in-good-hands' category */;
    }
  
    // Render the data
    return (
      <div>
        <p>NoticesCategoriesList</p>
        {/* {data.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))} */}
      </div>
    );
  }