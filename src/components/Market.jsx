import GroupTags from "./Tags/GroupTags";
import MarketTable from "./MarketTable";
import MarketTitle from "./MarketTitle";

const Market = () => {

    const tagLists = [
        {
            title: 'Terbaru',
            href: 'https://pintu.co.id/market/tags/new',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Latest_b83e6c1ad1.svg",
        },
        {
            title: 'DeFi',
            href: 'https://pintu.co.id/market/tags/defi',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/De_Fi_c2cbe56025.svg",
        },
        {
            title: 'NFT/Gaming',
            href: 'https://pintu.co.id/market/tags/gaming',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Gaming_0d52ecf73a.svg",
        },
        {
            title: 'CEX',
            href: 'https://pintu.co.id/market/tags/cex',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Cex_33897131c9.svg",
        },
        {
            title: 'DEX',
            href: 'https://pintu.co.id/market/tags/dex',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Dex_309b635c4c.svg",
        },
        {
            title: 'Layer-1',
            href: 'https://pintu.co.id/market/tags/layer-1',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Layer1_f326cdc673.svg",
        },
        {
            title: 'Infrastructure',
            href: 'https://pintu.co.id/market/tags/infrastructure',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Infra_1ff3846c0a.svg",
        },
        {
            title: 'Lending',
            href: 'https://pintu.co.id/market/tags/lending',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Lending_f45b671bb7.svg",
        },
        {
            title: 'Layer-2',
            href: 'https://pintu.co.id/market/tags/layer-2',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Layer2_aa0d8bfe6d.svg",
        },
        {
            title: 'Ekosistem Stablecoin',
            href: 'https://pintu.co.id/market/tags/stablecoin',
            icon: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Stablecoin_666453c616.svg",
        },
    ]

    return (
        <div className="flex flex-col gap-4">
            <MarketTitle />
            <GroupTags tagLists={tagLists} />
            <MarketTable />
        </div>
    );
}

export default Market;