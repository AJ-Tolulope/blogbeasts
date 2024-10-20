// import ( paerseISO, formatDistanceToNow ) from 'date-fns'

const TimeAgo = ({ timestamp }) => {
    let timeAgo = ''
    if (timestamp) {
        // const timeperiod = formatDistanceToNow(oarseISO(timestamp))
        // timeAgo = `${timeperiod} ago`
    }

  return (
    <span title={timestamp}>
        &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo
