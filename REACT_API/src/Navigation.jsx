import {Link} from 'react-router-dom';
import './index.css'
export default function Navigation() {

return(
<>
<Link className='lien' to="/List">Liste</Link>
<Link className='lien' to="/Ajout">Ajouter</Link>
</>
)
}