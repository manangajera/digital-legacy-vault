import * as AliveService from '../services/aliveService.js';
import catchAsync from '../utils/catchAsync.js';

export const triggerAliveCheck = catchAsync(async (req, res, next) => {
  const response = await AliveService.sendAliveCheck(req.params.id);
  res.json(response);
});

export const respondAlive = catchAsync(async (req, res, next) => {
  const response = await AliveService.userAliveResponse(req.params.id);
  res.json(response);
});

export const runInactivityCheck = catchAsync(async (req, res, next) => {
  const result = await AliveService.markInactiveUsers();
  res.json(result);
});
