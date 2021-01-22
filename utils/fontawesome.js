import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faReact, faAws } from '@fortawesome/free-brands-svg-icons'
import { faLock, faPlus, faUsers, faCogs, faImages, faTachometerAlt, faTimesCircle, faEdit, faPlusCircle, faTrash, faSearch, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

// Import @fortawesome/free-brands-svg-icons
library.add(
  faReact, faAws
);

// Import @fortawesome/free-solid-svg-icons
library.add(
  faLock, faPlus, faUsers, faCogs, faImages, faTachometerAlt, faTimesCircle, faEdit, faPlusCircle, faTrash, faSearch, faCloudDownloadAlt
);