import { ReactSVG } from 'react-svg';

const Tags = ({ title, icon, link }) => {
    return (
        <div className="flex">
            <div className="flex rounded-lg p-1 gap-2 items-center bg-blue-100 text-xs text-blue-700 font-semibold">
                <ReactSVG src={icon.replace('https://s3-ap-southeast-1.amazonaws.com', '')} style={{ color: '#5D6FDA' }}/>
                {title}
            </div>
        </div>
    )
}

export default Tags