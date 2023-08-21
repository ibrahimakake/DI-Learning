import React from "react";
import { Link } from "react-router-dom";

function Menu(){


    return(
        <div>
            <button>
                <Link to='search/mountain'>Mountain</Link>
            </button>
            <button>
                <Link to='search/Beaches'>Beaches</Link>
            </button>
            <button>
                <Link to='search/Birds'>Birds</Link>
            </button>
            <button>
                <Link to='search/food'>Food</Link>
            </button>
        </div>
    )
}

export default Menu;