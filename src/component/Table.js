import React from 'react';
import Table from 'react-bootstrap/Table';


function tab() {
    return (
        
          <div>
            <Table striped bordered hover size="sm" className="tab">
  <thead>
    <tr>
      <th className="bito">#</th >
      <th  className="bito">Plant</th>
      <th  className="bito">Diseases</th>
      <th  className="bito">Prevention</th>
      
    </tr>
  </thead>
  <tbody>
    <tr  className="bito">
      <td>1</td>
      <td>Cassava</td>
      <td>Cassava Mosaic </td>
      <td>To prevent Cassava Mosaic Disease (CMD) is the practice of phytosanitation, disease resistant varieties, cultural practices, vector control and mild-strain protection.
Phytosanitation is a general term used as a means of improving the health status of cassava planting material and for removing sources of inoculum from which further spread of CMD can occur through the activity of the whitefly vector.
There are three features of phytosanitation:
This include 
I.	Crop hygiene involving removal of all diseased cassava or immediately around sites to be used for new planting.
II.	The use of CMD-free stem cuttings as vegetative planting material.
III.	Removal (roguing) of diseased plants from within crops stand.
</td>
      
     
    </tr>
    <tr  className="bito">
      <td>2</td>
      <td>Cocoa</td>
      <td>Black Pod </td>
      <td>There are numerous ways to curb black pod. These are the few ways mentioned below:
Cultural Control: A spacing of 3.1 x 3.1m and pruning of trees are recommended for cocoa planting inorder to allow more light and air flow around the trees. When this practice is done it will help to reduce the level of humity that will cause blackpod disease.
Chemical Control: The application of copper fungicide,Metalaxyl (Ridomil) and cuprous oxide (Perenox) will help eliminate 
 Black pod incidences in cocoa farms and increase the harvest of cocoa pod. 
Biological control: Heavy application of chemical fungicide would eventually leads to resistant of pathogen and causing soil and water pollutions. Hence, more sustainable and environmental friendly method will  be established and implemented, such as biological control.Several  species of fungi from the genera of Trichodema is identified  to be important endophyte, to control black pod caused by Phytophthora spp.
</td>
     
     
    </tr>
    <tr  className="bito">
      <td>3</td>
      <td>Plantain</td>
      <td>Yellow sigatoka </td>
      <td>•	Reduce humidity in the plot through a proper management of irrigation and drainage (drip or under foliage spray are less favourable to the development of the fungus than overhead sprinklers). Weeding, up to date de-suckering, a planting density of 1650-1850 plants and maintenance of edges, will allow good aeration of plot.
•	Cut all the leaves on the mother plant during harvest
•	Quickly destroy all fallow plots to avoid creating infestation reserves.
•	Avoid overpopulating your plantain.
</td>
     
    </tr>
    
  </tbody>
</Table>  
        </div>
    )
}

export default tab;