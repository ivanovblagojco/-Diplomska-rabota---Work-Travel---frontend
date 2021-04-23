import {Component} from "react";
import "../css/postCard.css"
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton } from "@material-ui/core";
class PostCard extends Component{
    constructor(props) {
        super(props);

        this.from_agency=this.props.post.from_agency;
    }
    
    render() {
        let main_content;
        debugger;
        if(this.from_agency===true){
            main_content=(
                <Card>
                <CardActionArea>
                    <img className="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]"
                        src={`data:${this.props.post.mime_type};base64,${this.props.post.bytes}`} style={{ width: "100%", height: 250 }} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.post.title.substring(0, 15) + "..."}
                        </Typography>
                        {this.props.post.date_created}
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.post.description.substring(0, 30) + "..."}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link size="small" color="primary" className="btn btn-info" to={`/posts/${this.props.post.id}`} style={{float:"left"}}>
                        Види повеќе</Link>
                    <IconButton style={{fontSize:"14px"}}>
                        Агенција
                    </IconButton>
                </CardActions>
            </Card>
            )
        }else{
            main_content=(
                <Card>
                <CardActionArea>
                    <img className="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]"
                        src={`data:${this.props.post.mime_type};base64,${this.props.post.bytes}`} style={{ width: "100%", height: 250 }} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.post.title.substring(0, 15) + "..."}
                        </Typography>
                        {this.props.post.date_created}
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.post.description.substring(0, 30) + "..."}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link size="small" color="primary" className="btn btn-warning" to={`/posts/${this.props.post.id}`}>
                        Види повеќе</Link>
                    <IconButton style={{fontSize:"14px"}}>
                        Корисник
                    </IconButton>
                </CardActions>
            </Card>
            )
        }
        return(
            <div style={{ marginBottom: "30px" }}>
                <Link to={`/posts/${this.props.post.id}`} style={{ textDecoration: 'none' }}>
                    {main_content}
                </Link>
            </div>
        )
    }
}
export default PostCard;