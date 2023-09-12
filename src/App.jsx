import './App.css'
// import DataTable from './components/DataTable'
import AdminstratorOverview from './pages/AdministrativeView'
// import Cards from './pages/cards'

export default function App() {
  return (
    <>
    {/* Cards    */}
    {/* <div style={{display:"flex",gap:"10px",justifyContent:"space-between"}}>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>

    </div> */}

    {/* enrollment  */}
    {/* <div style={{marginTop:"20px"}}>
       <div style={{display:"flex",justifyContent:"space-between"}}>
        <div>LATEST ENROLLMENTS</div>
        <div>View all courses</div>
       </div>

       <div style={{width:"100%"}}>
        <DataTable/>

       </div>
    </div>
     */}
     <AdminstratorOverview/>
    </>
  )
}