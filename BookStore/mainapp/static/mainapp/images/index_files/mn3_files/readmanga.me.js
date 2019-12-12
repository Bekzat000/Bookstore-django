var adfoxBiddersMap = {
    "myTarget": "952961",
    "betweenDigital": "957893",
	"alfasense": "1056746",
	"getintent": "1048899",
    "rtbhouse": "1019105"
};
var adUnits = [
    {
        "code": "adfox_156861415062829231",
        "bids": [
            {
                "bidder": "myTarget",
                "params": {
                    "placementId": "625542"
                }
            },
            {
                "bidder": "betweenDigital",
                "params": {
                    "placementId": "2997439"
                }
            },
			{
                "bidder": "alfasense",
                "params": {
                    "placementId": "418"
                }
            },
            {
                "bidder": "rtbhouse",
                "params": {
                    "placementId": "kQDEzA6knQBV5zIQm0lr"
                }
            }
        ],
        "sizes": [
            [
                970,
                90
            ]
        ]
    },
	{
        "code": "adfox_15719901332469814",
        "bids": [
            {
                "bidder": "myTarget",
                "params": {
                    "placementId": "627560"
                }
            },
            {
                "bidder": "betweenDigital",
                "params": {
                    "placementId": "3392620"
                }
            },
			{
                "bidder": "getintent",
                "params": {
                    "placementId": "66_320x100_alfadart"
                }
            },
            {
                "bidder": "rtbhouse",
                "params": {
                    "placementId": "Mp6nDymhcpPJLmlpiwMu"
                }
            },
            {
                "bidder": "alfasense",
                "params": {
                    "placementId": "955"
                }
            }
			
        ],
        "sizes": [
            [
                320,
                100
            ]
        ]
    }
];
var userTimeout = 750;
window.YaHeaderBiddingSettings = {
    biddersMap: adfoxBiddersMap,
    adUnits: adUnits,
    timeout: userTimeout
};