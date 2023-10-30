export default function Dataloader(timeData) {
  if (timeData && timeData.timeData) {
    const timeDataValues = Object.keys(timeData.timeData).map((key) => {
      return timeData.timeData[key];
    });
    return (
      <div style={{ background: "blue" }}>
        {timeDataValues.map((item) => (
          <div className="" key={item.id}>
           <p> {item.id}</p>
           <p> {item.date}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
