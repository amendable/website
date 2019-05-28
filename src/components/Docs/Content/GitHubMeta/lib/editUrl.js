import current from '../../lib/current'

export default (props) => (
  `https://github.com/amendable/website/edit/master/src/docs/${current(props).slug}.md`
)
