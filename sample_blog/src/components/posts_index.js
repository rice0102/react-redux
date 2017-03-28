import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

// import { bindActionCreators} from 'redux';

class PostsIndex extends Component{
    componentWillMount(){
       this.props.fetchPosts();
    }
    
    renderPosts(){
        return this.props.posts.map((post)=>{
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/" + post.id } >                    
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>     
            );
        });
    }

    render(){
        return(
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts.all};
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({fetchPosts},dispatch);
// }
// export default connect(null,mapDispatchToProps)(PostsIndex); 
// 
// use another way to bind action 

export default connect(mapStateToProps,{fetchPosts})(PostsIndex); 

// 1. form
// 2. add component 
// 3. implement the add button to post PostsIndex link view
// 4. implement form call action creator
// 5. create action creator