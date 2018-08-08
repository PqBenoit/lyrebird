create a file called .env in the root of your project and setup your api_key

```
REACT_APP_LYREBIRD_API_KEY=your_api_key
```

Issue I got:

- loading utterance through next/previous urls

When total utterance is not a %10 number, arriving on the last page and loading utterances will set the limit on previous property to the remaining utterances on the last page.

Example:
I got 35 utterances total

First utterances load
previous= ''
next = '...?offset=10&limit=10'

I fetch utterances through "next url" provided
=>
previous= '...?offset=0&limit=10'
next = '...?offset=20&limit=10'

Carry on, fetching through "next url"
=>
previous= '...?offset=10&limit=10'
next = '...?offset=30&limit=5'

Here on the "next url", limit is set to 5.

Go on fetching:
=>
previous= '...?offset=25&limit=5'
next = ''

From now, each url provided will have a limit of 5

Let's fetch from previous:
=>
previous= '...?offset=20&limit=5'
next = '...?offset=25&limit=5'

Why not keep the limit to 10 ?
