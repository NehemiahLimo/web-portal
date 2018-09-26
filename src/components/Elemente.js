import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Badge, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class Elemnte extends Component{


   constructor(props){
       super(props);
       this.state = {
           regions: []
       }
   }

   componentDidMount() {
     this.fetchdata();


      }



      fetchdata(){

      this.setState({
           regions: []
       })

       const headers ={
           headers:{
               'Authorization': `Basic ${btoa('kenya:Last#2002')}`
       }
       }



       fetch('http://197.136.81.99:8080/training/api/dataElements.json?pageSize=50',headers)
       .then(response =>response.json())
       .then(parsedJSON=>parsedJSON.dataElements.map(dataElements=>(
           {

           dataElementsID: `${dataElements.id}`,
           dataElementDesc: `${dataElements.displayName}`


       }
   )))
       .then(regions=>this.setState({regions}))
       .catch(error=>console.log('parsed error', error))

      }

   render(){


       const { name }=this.props;
       const {regions}  =this.state;

       return(



        <div className="container-fluid" >

          <div class="accordion" id="accordionExample">


{

                           regions.map(region=>{

                           return (<div class="card">



                             <div class="card-header" id="">


                             <h5 class="mb-0"   >


                                <button key={region.dataElementsID}  class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">


               {region.dataElementDesc}

                         </button>




                               </h5>
                             </div>
                             <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                               <div class="card-body">
                                 <h4>dataElementsID: {region.dataElementsID}</h4><br />
                                 <h5>Data Elements description:{region.dataElementDesc}</h5><br />



                                  code:{region.dataElementscode}  link: {region.dataElementslink} description: {region.dataShortdescr}</div>

                           </div>

                           </div>
                         )

                           })
                       }


            <div class="card">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Collapsible Group Item #2
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body">

azsdfxcvbhjnkl;

                  </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Collapsible Group Item #3
                  </button>
                </h5>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>



{/*
              <ListGroup>
              <ListGroupItem active>
              <ListGroupItemHeading>Data Elements</ListGroupItemHeading>
              <ListGroupItemText> Aggregated List of Data Elements</ListGroupItemText>
              </ListGroupItem>
               {
                              regions.map(region=>{
                              return <ListGroupItem key={region.dataElementsID }>{region.dataElementDesc }</ListGroupItem>

                              })
                          }

              </ListGroup>


              <div class="container container-fluid">
                  <button class="btn btn-success">Export to PDF<span class="glyphicon glyphicon-pencil"></span></button>
                  <button class="btn btn-success">Export to CSV<span class="glyphicon glyphicon-file"></span></button>
                  <button class="btn btn-success">Export to XML<span class="glyphicon glyphicon-home"></span></button>

              </div>
              */}



        </div>


       )
   }
}
export default Elemnte;
