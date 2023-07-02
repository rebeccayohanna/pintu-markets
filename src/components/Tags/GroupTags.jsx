import Tags from './Tags';

const GroupTags = ({tagLists}) => {
    return (
        <div className="container mx-auto mb-6">
            <div className="flex flex-row gap-2 overflow-x-auto">
                {tagLists.map((tag) => (
                    <Tags title={tag.title} icon={tag.icon} link={tag.href}/>
                ))}
            </div>
        </div>
    )
}

export default GroupTags