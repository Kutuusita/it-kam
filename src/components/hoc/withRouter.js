import { useParams } from 'react-router-dom';

const withRouter = (WrappedComponent) => (props) => {
  let {profileId} = useParams();
  return (
    <WrappedComponent
    {...props}
    profileId={profileId}/>
  )
}

export default withRouter;