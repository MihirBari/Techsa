export function Detail(props) {
  return (
    <div className="ResourceLis1t">
      <div key={props.id} className="ResourceCardd1">
        <div className="ResourceCardd_content1">
          <div className="displayStack__5">
         <img style={{height:"40px", width:'40px',marginTop:'15px'}} src={props.name} alt= " " />
            
            <div style={{marginTop:'17px',textAlign:'center'}}> 
            {props.BreifSummary}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
