<script>
    import "../styling.css";
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
        "title":"Chaucer is born in London, England",
        "time":"1343"
    },
    {
        "title":"Chaucer serves as a page to Elizabeth, Countess of Ulster",
        "time":"1357"
    },
    {
        "title":"Chaucer joins the English army and fights in the Hundred Years' War",
        "time":"1359"
    },
    {
        "title":"Chaucer marries Philippa de Roet, a lady-in-waiting to Queen Philippa",
        "time":"1366"
    },
    {
        "title":"Chaucer becomes a member of Parliament",
        "time":"1374"
    },
    {
        "title":"Chaucer becomes a clerk of the king's works",
        "time":"1378"
    },
    {
        "title":"Chaucer becomes a justice of the peace",
        "time":"1380"
    },
    {
        "title":"Chaucer becomes a comptroller of the customs in the port of London",
        "time":"1386"
    },
    {
        "title":"Chaucer becomes deputy forester of North Petherton Park in Somerset",
        "time":"1389"
    },
    {
        "title":"Chaucer becomes a member of the royal household",
        "time":"1391"
    },
    {
        "title":"Chaucer begins writing The Canterbury Tales",
        "time":"1400"
    },
    {
        "title":"Chaucer dies in London, England",
        "time":"1400"
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