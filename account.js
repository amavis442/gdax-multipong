exports = module.exports = {}

exports.account = null

const load = exports.load = () => {
  let stored_account = db.collections.account.findOne()
  if( stored_account ) {
    exports.account = stored_account
  } else {
    let new_account = {
      fees: 0,
      buy_count: 0,
      sell_count: 0,
      buys: 0,
      sells: 0
    }
    exports.account = db.collections.account.insert( new_account )
  }
}

const update = exports.update = (account, mutator) => {
  mutator(account)
  //ui.logger('sys_log', `update_account: ${JSON.stringify(account)}`)
  db.collections.account.update(account)
}
