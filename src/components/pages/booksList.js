import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/booksActions';
import { Grid, Col, Row, Button} from 'react-bootstrap';

import BookItem from './bookItem';

class BooksList extends React.Component{
    componentDidMount(){
        //Dispatch an action
        this.props.getBooks(
            [{
                id: 1,
                title: 'this is the book title',
                description: 'this is the book description',
                price: 43.33
            },
            {
                id: 1,
                title: 'this is the second book title',
                description: 'this is the second book description',
                price: 50
            }]
        );
    }
    render(){
        const booksList = this.props.books.map(function(booksArr){
            return(
                <Col xs={12} sm={6} md={4} key={booksArr.id}>
                    <BookItem
                        id={booksArr.id}
                        title={booksArr.title}
                        description={booksArr.description}
                        price={booksArr.price}/>
                </Col>
            )
        });
        return(
            <Grid>
                <Row style={{marginTop:'15px'}}>
                    {booksList}
                </Row>
            </Grid>
        )
    }
}
function mapStateToProps(state){
    return{
        books: state.books.books
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getBooks:getBooks}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);