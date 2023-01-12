<script>
    import "./styling.css";
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';

	const options = [
    {
        "title":"Norman Conquest of England",
        "time":"1066"
    },
    {
        "title":"First Crusade",
        "time":"1096"
    },
    {
        "title":"Henry I becomes King of England",
        "time":"1100"
    },
    {
        "title":"Stephen becomes King of England",
        "time":"1135"
    },
    {
        "title":"Henry II becomes King of England",
        "time":"1154"
    },
    {
        "title":"Thomas Becket assassinated",
        "time":"1170"
    },
    {
        "title":"Richard the Lionheart becomes King of England",
        "time":"1189"
    },
    {
        "title":"Signing of the Magna Carta",
        "time":"1215"
    },
    {
        "title":"King John becomes King of England",
        "time":"1216"
    },
    {
        "title":"Battle of Lincoln",
        "time":"1217"
    },
    {
        "title":"Edward I becomes King of England",
        "time":"1272"
    },
    {
        "title":"Edward I expels Jews from England",
        "time":"1290"
    },
    {
        "title":"Beginning of the Hundred Years' War between England and France",
        "time":"1337"
    },
    {
        "title":"Outbreak of the Black Death in Europe",
        "time":"1348"
    },
    {
        "title":"Peasants' Revolt in England",
        "time":"1381"
    },
    {
        "title":"Henry IV becomes King of England",
        "time":"1399"
    }
];
</script>

<div id="topbar">
    <img id="left" src="left.png" alt="leftcorner">
    <img id="center" src="center.png" alt="centerimage">
    <img id="right" src="right.png" alt="rightcorner">
</div>
<Timeline position="alternate">
	{#each options as option}
		<TimelineItem>
			<TimelineOppositeContent slot="opposite-content">
				<p>{option.time}</p>
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDot style={'background-color: #7CD5E2;'}/>
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<h3>{option.title}</h3>
			</TimelineContent>
		</TimelineItem>
	{/each}
</Timeline>

<style>
	h3 {
		letter-spacing: 1.5px;
		margin: 0;
		padding: 0;
	}
	
	p {
		letter-spacing: 1.5px;
		margin: 0;
		color: grey;
	}
</style>