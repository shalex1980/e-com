import Link from 'next/link';

const Preview = (props) => {
  const { title, shortContent, category, id } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{ title }</h5>
        <h6 className="card-subtitle mb-2 text-muted">Category : { category }</h6>
        <p className="card-text">{ shortContent }</p>
        <Link href={`/article/${id}`}><a  className="card-link">Reed full Article</a></Link>
      </div>
    </div>
  )

}

export default Preview;