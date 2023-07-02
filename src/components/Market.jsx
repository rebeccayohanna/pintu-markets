import GroupTags from "./Tags/GroupTags";
import MarketTable from "./MarketTable";
import MarketTitle from "./MarketTitle";

const Market = () => {
    
    const tagLists = [
        {
            title: 'Terbaru',
            href: '/',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Latest_b83e6c1ad1.svg",
        },
        {
            title: 'DeFi',
            href: '/',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/De_Fi_c2cbe56025.svg",
        },
        {
            title: 'NFT/Gaming',
            href: '/',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Gaming_0d52ecf73a.svg",
        },
        {
            title: 'CEX',
            href: '/',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Cex_33897131c9.svg",
        },
        {
            title: 'DEX',
            href: '/',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Dex_309b635c4c.svg",
        },
        {
            title: 'Layer-1',
            href: '/',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Layer1_f326cdc673.svg",
        },
        {
            title: 'Infrastructure',
            href: '/',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Infra_1ff3846c0a.svg",
        },
        {
            title: 'Lending',
            href: '/',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Lending_f45b671bb7.svg",
        },
        {
            title: 'Layer-2',
            href: '/',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Layer2_aa0d8bfe6d.svg",
        },
        {
            title: 'Ekosistem Stablecoin',
            href: '/',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Stablecoin_666453c616.svg",
        },
    ]

    return (
        <div className="flex flex-col gap-4">
            <MarketTitle />
            <GroupTags tagLists={tagLists}/>
            <MarketTable />
        </div>
    );
}

export default Market;