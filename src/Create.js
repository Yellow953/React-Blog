import { useState } from "react";

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('mario');
    const [ isSending, setIsSending ] = useState(false);
    const [ message, setMessage ] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const article = { title, body, author };

        setIsSending(true);

        fetch('http://localhost:8000/articles', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(article)
        }).then(() => {
            setIsSending(false);
            setMessage('Article successfully posted...');
            setTimeout(() => setMessage(null), 2000);
            setTitle('');
            setBody('');
        }).catch((e) => {
            setIsSending(false);
            setMessage(e.message);
        });
    };

    return ( 
        <div className="create">
            <h2 className="heading">New Article</h2>

            { message && <div className="message">{ message }</div> }

            <form onSubmit={handleSubmit}>
                <label className="form-label">Article Title: </label>
                <input 
                    type="text"
                    required
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value) }
                />

                <label className="form-label">Article Body: </label>
                <textarea 
                    rows="5"
                    required
                    value={ body }
                    onChange={ (e) => setBody(e.target.value) }
                ></textarea>

                <label className="form-label">Article Author</label>
                <select 
                    required
                    value={ author }
                    onChange={ (e) => setAuthor(e.target.value) }
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                { !isSending && <button className="btn btn-submit">Create Article</button> }

                { isSending && <button disabled className="btn btn-submit">Saving ...</button> }
            </form>
        </div>
    );
}
 
export default Create;