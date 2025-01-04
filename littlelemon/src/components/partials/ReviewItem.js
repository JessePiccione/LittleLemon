const objects=[
    {
        "name":"Deep",
        "qoute":"I cannot stop thinking about the salad since.",
        "img":require("../../images/reviewitems/deep.png")
    },
    {
        "name":"Andrew",
        "qoute":"Finally, somewhere that gets salad done right.",
        "img":require("../../images/reviewitems/andrew.png")
    },
    {
        "name":"Brendan",
        "qoute":"Salad like mom used to make, will be back.",
        "img":require("../../images/reviewitems/brendan.png")
    },
    {
        "name":"Lisa",
        "qoute":"Oh the salad, now that was really something.",
        "img":require("../../images/reviewitems/lisa.png")
    }
]
export function ReviewItem({name, qoute, img}){
    return(
        <section className="ReviewItem">
            <section>
                <img src={img} alt={`${name} profile review`}/>
                <h3>{name}</h3>
            </section>
            <section>
                <label>Rating</label>
                <img name='rating' className='ReviewItemRatingImage' src={require('../../images/reviewitems/rating.png')} alt={`Rating for ${name}`}/>
            </section>
            <section>
                <p>{`"${qoute}"`}</p>
            </section>
        </section>
    )
}
export function ReviewItemList(){
    return (
        <article className='ReviewItemList'>
            {objects.map(props=><ReviewItem {...props}/>)}
        </article>
    )
}
export default ReviewItemList;