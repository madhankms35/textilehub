function FilterSidebar({

    category,
    setCategory

}){

const categories=[

"all",
"cotton",
"silk",
"denim",
"polyester",
"yarn"

]

return(

<div className="card shadow-sm">

<div className="card-body">

<h4 className="mb-4">

Filters

</h4>

<h6 className="mb-3">

Categories

</h6>

{

categories.map(item=>(

<div
className="form-check mb-2"
key={item}
>

<input

className="form-check-input"

type="radio"

checked={category===item}

onChange={()=>setCategory(item)}

/>

<label className="form-check-label">

{item}

</label>

</div>

))

}

</div>

</div>

)

}

export default FilterSidebar;